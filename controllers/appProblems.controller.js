/**
 * Application problems controllers
 */
import AppProblem from "../models/appProblems.model.js";

// 1- Get all application problems

export const getAllAppProblems = async (req, res) => {
  try {
    // const appProblemsData = await AppProblem.find(req.query);
    /**
     * @description: req.query will fail with pagination and sorting the query so we should exclude the fields of paginination an d sorting from teh query
     */
    const queryObj = { ...req.query }; // shallowing the req.query
    const excludedField = ["page", "limit", "sort", "fields"];
    excludedField.forEach((el) => delete queryObj[el]);

    // handling gt|gte|lt|lte in req.query
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gt|gte|le|lte)\b/g,
      (match) => `$${match}`
    );

    // const appProblemsData = await AppProblem.find(queryObj);
    const appProblemsData = await AppProblem.find(queryString);

    res.status(200).json({
      status: "success",
      count: appProblemsData.length,
      data: {
        appProblemsData,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// 2- Get an App problem by id

export const getAnAppProblem = async (req, res) => {
  try {
    const appProblem = await AppProblem.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        appProblem,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error in getting this problem",
    });
  }
};

// 3- create new appProblem

export const createNewAppProblem = async (req, res) => {
  try {
    const appProblem = await AppProblem.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        NewAppProblem: appProblem,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// 4- delete an App problem by id

export const deleteAnAppProblem = async (req, res) => {
  try {
    await AppProblem.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error in deleting this problem",
    });
  }
};

// 5- update an app Problem

export const updateAnAppProblem = async (req, res) => {
  try {
    const appProblem = await AppProblem.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      staus: "success",
      data: {
        appProblem,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
