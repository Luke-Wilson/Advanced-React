const mutations = {
	createDog(parents, args, context, info) {
		global.dogs = global.dogs || [];
		
		const newDog = { name: args.name };
		global.dogs.push(newDog);
		console.log(args)
		return newDog;
	}
};

module.exports = mutations;
