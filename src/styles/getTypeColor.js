export const getTypeColor = (typeNames) => {
    const typeColors = {
      grass: "#96e29e",
      fire: "#fca996",
      water: "#9ed3f7",
      bug: "#c7e19d",
      normal: "#f1efdb",
      poison: "#d6aef7",
      electric: "#ffe168",
      ground: "#eac58e",
      fairy: "#f5c4f7",
      fighting: "#f4b8af",
      psychic: "#f6a2c9",
      rock: "#d4d4d4",
      ghost: "#d7d8e1",
      ice: "#d5f4fa",
      dragon: "#b9a3f7",
      flying: "#c9e5f5",
      steel: "#b8c4d2"
    };
    const colors = typeNames.map((typeName) => {
      if (typeColors.hasOwnProperty(typeName)) {
        return typeColors[typeName];
      }
      return "gray";
    });
  
    return colors;
  };
  
  
  export default getTypeColor