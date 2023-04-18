class APIFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // filtering
  filter() {
    // const appProblemsData = await AppProblem.find(req.query);
    /**
     * @description: req.query will fail with pagination and sorting the query so we should exclude the fields of paginination an d sorting from teh query
     */
    const queryObj = { ...this.queryString }; // shallowing the req.query
    const excludedField = ["page", "limit", "sort", "fields"];
    excludedField.forEach((el) => delete queryObj[el]);

    // handling gt|gte|lt|lte in req.query
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|le|lte)\b/g, (match) => `$${match}`);

    // const appProblemsData = await AppProblem.find(queryObj);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  // sorting
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  // selectedFields
  selectedField() {
    if (this.queryString.fields) {
      const selectedFields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(selectedFields);
    } else {
      this.query = this.query.select("-__v");
    }
  }
  // pagination
  paginate() {
    const page = this.queryString.page || 1;
    const limit = this.queryString.limit || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

export default APIFeature;
