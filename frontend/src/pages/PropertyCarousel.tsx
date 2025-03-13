// import React, { useRef } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { Box, Typography, Button } from "@mui/material";

// function PropertyCarousel() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollXProgress } = useScroll({ container: ref });
//   const springX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });
//   const x = useTransform(springX, [0, 1], ["0%", "-100%"]);

//   const properties = [
//     {
//       title: "Urban Contemporary Villa",
//       price: "$450,000",
//       details: "6 Bed Room  4 Bath        3,800 SQ FT",
//     },
//     {
//       title: "Luxury High-Rise Condo",
//       price: "$850,000",
//       details: "4 Bed Room  4 Bath        4,500 SQ FT",
//     },
//     {
//       title: "Modern Rustic Estate",
//       price: "$300,000",
//       details: "3 Bed Room  2 Bath        2,000 SQFT",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         overflow: "hidden",
//         position: "relative",
//         width: "100%",
//         padding: "2rem 0",
//       }}
//     >
//       <Box
//         ref={ref}
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           scrollSnapType: "x mandatory",
//           scrollBehavior: "smooth",
//           "-webkit-overflow-scrolling": "touch",
//           padding: "0 2rem",
//         }}
//       >
//         <motion.div style={{ x }} className="inner-carousel">
//           {properties.map((property, index) => (
//             <Box
//               key={index}
//               sx={{
//                 minWidth: "300px",
//                 marginRight: "1rem",
//                 scrollSnapAlign: "start",
//                 backgroundColor: "white",
//                 padding: "1.5rem",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 textAlign: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "200px",
//                   backgroundColor: "lightgray",
//                   mb: "1rem",
//                   borderRadius: "8px",
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: "bold", mb: "0.5rem" }}
//               >
//                 {property.title}
//               </Typography>
//               <Typography variant="body2" sx={{ mb: "1rem" }}>
//                 {property.details}
//               </Typography>
//               <Typography variant="h6" sx={{ color: "#e91e63", mb: "1rem" }}>
//                 {property.price}
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#fce4ec",
//                   color: "#e91e63",
//                   borderRadius: "2rem",
//                   padding: "0.5rem 1.5rem",
//                 }}
//               >
//                 View Details
//               </Button>
//             </Box>
//           ))}
//         </motion.div>
//       </Box>

//       {/* Navigation Buttons (Optional) */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           transform: "translateY(-50%)",
//           left: "1rem",
//         }}
//       >
//         <Button
//           onClick={() => {
//             if (ref.current) {
//               ref.current.scrollBy({ left: -320, behavior: "smooth" });
//             }
//           }}
//           sx={{
//             minWidth: "auto",
//             padding: "0.5rem",
//             borderRadius: "50%",
//             backgroundColor: "#fce4ec",
//             color: "#e91e63",
//           }}
//         >
//           &lt;
//         </Button>
//       </Box>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           transform: "translateY(-50%)",
//           right: "1rem",
//         }}
//       >
//         <Button
//           onClick={() => {
//             if (ref.current) {
//               ref.current.scrollBy({ left: 320, behavior: "smooth" });
//             }
//           }}
//           sx={{
//             minWidth: "auto",
//             padding: "0.5rem",
//             borderRadius: "50%",
//             backgroundColor: "#fce4ec",
//             color: "#e91e63",
//           }}
//         >
//           &gt;
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default PropertyCarousel;
