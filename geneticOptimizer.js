export class geneticOptimizer {
  constructor({ initialStateGenerator, mutator, fitnessEvaluator }) {
    //Function that returns an array of random states
    this.initialStateGenerator = initialStateGenerator;

    //Function that slightly modify a state
    this.mutator = mutator;

    //Function that associate a fitness score to a given state
    this.fitnessEvaluator = fitnessEvaluator;
  }

  *optimize() {
    //Generate a population that is an array of states
    const population = this.initialStateGenerator();

    //Find Best state in the population
    let bestFitness = Number.NEGATIVE_INFINITY;
    const bestState = population.reduce((acc, curr) => {
      let currentFitness = this.fitnessEvaluator(curr);
      acc = currentFitness > bestFitness ? curr : acc;
      bestFitness = currentFitness > bestFitness ? currentFitness : bestFitness;
    });

    while (true) {
      yield population;
    }
  }
}
