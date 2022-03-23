"use strict";
const multiples = [];
for (let i = 3; i <= 100; i = i + 3) {
    multiples.push({
        number: i,
        label: "Music"
    });
}
for (let i = 5; i <= 100; i = i + 5) {
    multiples.push({
        number: i,
        label: "TI"
    });
}
for (let i = 15; i <= 100; i = i + 15) {
    const index = multiples.findIndex(multiple => multiple.number === i);
    multiples[index].label = "Musical";
}
// multiples.sort((a, b)=>{
//     if (a.number > b.number) {
//         return 1;
//       }
//       if (a.number < b.number) {
//         return -1;
//       }
//       return 0;
// })
for (let i = 1; i <= 100; i++) {
    if (multiples.find(multiple => multiple.number === i)) {
        const multiple = multiples.find(multiple => multiple.number === i);
        console.log(multiple === null || multiple === void 0 ? void 0 : multiple.label);
        continue;
    }
    console.log(i);
}
//# sourceMappingURL=app.js.map