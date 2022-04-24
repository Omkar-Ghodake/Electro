class ApiFeatures {
	constructor(query, queryStr) {
		this.query = query
		this.queryStr = queryStr
	}

	search() {
		const keyword = this.queryStr.keyword
			? {
				title: {
					$regex: this.queryStr.keyword,
					$options: "i"
				}
			}
			: {}

		this.query = this.query.find({ ...keyword })

		return this
	}

	filter() {
		const queryCopy = { ...this.queryStr }

		// removing some fields for category
		const removeFields = ["keyword", "page", "limit", "latest", "sort"]
		removeFields.forEach(key => {
			delete queryCopy[key]
		})

		let queryStr = JSON.stringify(queryCopy)
		queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`)

		this.query = this.query.find(JSON.parse(queryStr))
		return this
	}

	pagination(resultsPerPage) {
		const currentPage = Number(this.queryStr.page) || 1

		const skip = resultsPerPage * (currentPage - 1)

		this.query = this.query.limit(resultsPerPage).skip(skip)

		return this
	}
}

module.exports = ApiFeatures