export function sortByAttribute(values, attribute) {
  let arrays = {};

  values.forEach((value) => {
    const id = String(value[attribute]);

    if (!Object.keys(arrays).includes(id)) {
      arrays = { ...arrays, [id]: [] };
    }

    arrays[id].push(value);
  });

  return arrays;
}
