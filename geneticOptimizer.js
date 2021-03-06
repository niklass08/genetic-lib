export class GeneticOptimizer {
  constructor({ initialStateGenerator, mutator, fitnessEvaluator }) {
    //Function that returns an array of random states
    this.initialStateGenerator = initialStateGenerator;

    //Function that take a state and return an array of slightly modified states
    this.mutator = mutator;

    //Function that associate a fitness score to a given state
    this.fitnessEvaluator = fitnessEvaluator;
  }

  *optimize() {
    //Generate a population that is an array of states
    let population = this.initialStateGenerator();
    while (true) {
      //Find Best state in the population
      let bestFitness = Number.NEGATIVE_INFINITY;
      const bestState = population.reduce((acc, curr) => {
        let currentFitness = this.fitnessEvaluator(curr);
        acc = currentFitness > bestFitness ? curr : acc;
        bestFitness = currentFitness > bestFitness ? currentFitness : bestFitness;
        return acc;
      });

      yield { bestState, population };

      //Mutate the best state to generate a new population
      population = this.mutator(bestState);
    }
  }
}
