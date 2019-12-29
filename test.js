import { geneticOptimizer } from './geneticOptimizer.js';
const options  = {
    initialStateGenerator: () => [Math.random()],
    mutator: () => {},
    fitnessEvaluator: () => {}
}
const toto = new geneticOptimizer(options);
console.log(toto.optimize());
for(const element of toto.optimize()){
    console.log(element)
}