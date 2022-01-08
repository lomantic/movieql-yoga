export let People = [
    {
        id: 1,
        name: "lomantic",
        age: 29,
        gender: "albino"
    },
    {
        id: 2,
        name: "mantic",
        age: 89,
        gender: "balbino"
    },
    {
        id: 3,
        name: "loman",
        age: 21,
        gender: "Kalbino"
    },
    {
        id: 4,
        name: "lotic",
        age: 9,
        gender: "calbi"
    },
    {
        id: 5,
        name: "lomac",
        age: 20,
        gender: "Galbi"
    },
];

export const getById = (id) => {
    const filteredPerson = People.filter((person) => person.id === id);
    return filteredPerson[0];
};

export const deleteById = (id) => {
    console.log(`This is id : ${id}`);
    const cleanedPerson = People.filter((person) => person.id !== id);
    if (People.length > cleanedPerson.length){
        People = cleanedPerson;
        return true;
    } else {
        return false;
    }
} 

export const addPerson = (name, gender, age) => {
    const newPerson = {
        id: (People.length)+1 ,
        name, 
        gender, 
        age
    };
    People.push(newPerson);
    return newPerson;
}