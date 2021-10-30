const people = [
  {
    name: "Angelina Jolie",
    age: 80,
    weight: 55,
    height: 1.79,
  },
  {
    name: "Eric Jones",
    age: 28,
    weight: 100,
    height: 1.6,
  },
  {
    name: "Paris Hilton",
    age: 34,
    weight: 79,
    height: 1.65,
  },
  {
    name: "Kayne West",
    age: 26,
    weight: 83,
    height: 1.83,
  },
  {
    name: "Bob Ziroll",
    age: 90,
    weight: 60,
    height: 1.65,
  },
];

const peopleImproved = people.map((person) => {
  const bmi = person.weight / person.height ** 2;
  return {
    ...person,
    bmi: Number(bmi.toFixed(2)),
    classification:
      bmi < 18.5 || bmi > 25 ? 'Fora da faixa "Normal"' : "Normal",
  };
});

console.log(peopleImproved);
