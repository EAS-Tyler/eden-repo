import zero from "../../../images/0.jpg";
import one from "../../../images/1.jpg";
import two from "../../../images/2.jpg";
import three from "../../../images/3.jpg";
import four from "../../../images/4.jpg";
import five from "../../../images/5.jpg";
import six from "../../../images/6.jpg";
import seven from "../../../images/7.jpg";
import eight from "../../../images/8.jpg";
import apple from "../../../images/apple.jpg";
import map from "../../../images/map.png";
import bed2 from "../../../images/eve/beds/559dcd20-bcd1-4d50-882c-b0f65a4ba9c1.jpg";

// export { zero, one, two, three, four, five, six, seven, eight, apple, map };

var images = {
zero, one, two, three, four, five, six, seven, eight, apple, map, bed2

};


export default images

// const importAll = (r) => {
//     const images = {};
//     r.keys().forEach((item) => {
//       images[item.replace('./', '').replace(/\.(jpg|png)$/, '')] = r(item);
//     });
//     return images;
//   };
  
//   const images = importAll(require.context('../../../images', false, /\.(png|jpg)$/));
  
//   export default images;