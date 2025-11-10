import axios from 'axios';


// Base URL for your API
const base = 'http://162.0.228.253:5000/api';


// Axios instance with token interceptor
const axiosInstance = axios.create({
  baseURL: base,
  withCredentials: true,
});


// // Get wallet balance
// export const getWalletBalance = async () => {
//   try {
//     const response = await axiosInstance.get('/wallet_balance/');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching wallet balance:', error);
//     throw error;
//   }
// };

// // Get orders
// export const getOrders = async (status = '') => {
//   try {
//     const response = await axiosInstance.post(`/customer_orders_&_cancel/${status ? `?status=${status}` : ''}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     throw error;
//   }
// };

// // Get order products
// export const getOrderProduct = async (order_id) => {
//   try {
//     const response = await axiosInstance.get(`/orders/${order_id}/products/`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching order products:', error);
//     throw error;
//   }
// };

export const getProjects = async () => {
  try {
    const response = await axiosInstance.get(`/projects/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
