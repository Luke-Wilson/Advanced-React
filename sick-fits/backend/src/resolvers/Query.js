const Query = {
	dogs(parent, args, ctx, info) {
		// There are four parameters for any query function:
		// parent
		// args: arguments that have been passed to the query.
		// ctx: "context" - see createServer function for related stuff to context.
		// info: More information that is available
		return global.dogs || []

	}

};

module.exports = Query;
