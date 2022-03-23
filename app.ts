const multiples = [];

for (let i = 3; i <=  100; i = i + 3) {
    multiples.push({
        number: i,
        label: "Music"
    });
}

for (let i = 5; i <=  100; i = i + 5) {
    multiples.push({
        number: i,
        label: "TI"
    });    
}


for (let i = 15; i <=  100; i = i + 15) {
    const index = multiples.findIndex(multiple => multiple.number === i);
    multiples[index].label = "Musical"; 
}


for (let i = 1; i <=  100; i++) {
    if (multiples.find(multiple => multiple.number === i)) {
        const multiple = multiples.find(multiple => multiple.number === i);
        console.log(multiple?.label)
        continue;
    }
    console.log(i);
}