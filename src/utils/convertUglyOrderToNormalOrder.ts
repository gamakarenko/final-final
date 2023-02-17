// import { IUsersOrder } from "store/Orders/Orders";
import { IOrder } from "types/order";

// export const convertUglyOrderToNormalOrder = (
//   uglyOrder: IUsersOrder | null | undefined,
// ): IOrder | null => {
//   if (uglyOrder) {
//     return {
//       id: uglyOrder.id,
//       adults: uglyOrder.adultsAmount,
//       airport: uglyOrder.airport,
//       carType: uglyOrder.autoType,
//       childrenAbove5: uglyOrder.childrenAbove5,
//       childrenUnder5: uglyOrder.childrenUnder5,
//       direction: uglyOrder.direction,
//       location: uglyOrder.location,
//       transferDate: uglyOrder.tripDate.slice(0, 10),
//       transferTime: uglyOrder.tripDate!.slice(-5),
//       passengers: uglyOrder.users.map((user) => ({
//         id: user.id,
//         fullName: user.name,
//         passportId: user.passport,
//         departureDate: user.arrivalDate.slice(0, 10),
//         departureTime: user.arrivalDate.slice(-5),
//         phoneNumber: user.phoneNumber,
//         telegramId: user.telegramLogin,
//         transferComment: user.tripComment,
//       })),
//     };
//   }

//   return null;
// };