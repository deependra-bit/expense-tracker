import { setExpenses } from "@/redux/Slices/expenseSlice.js";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const  useGetExpenses=()=>{
  const dispatch =useDispatch();
  const {category,markAsDone,markAsUndone}=useSelector(store=>store.expense);

  useEffect(()=>{
         const fetchExpenses= async()=>{
              try {
                axios.defaults.withCredentials=true;
              const res = await   axios.get(`http://localhost:8000/api/v1/expense/getall?category=${category}&done=${markAsDone}$Undone=${markAsUndone}`);
               if(res.data.success){
                 dispatch(setExpenses(res.data.expense));
               } 
            } catch (error) {
                 console.log(error);
                 
              }
         }
         setTimeout(fetchExpenses, 300);
  },[dispatch,category,markAsDone,markAsUndone]);
}

export default useGetExpenses;