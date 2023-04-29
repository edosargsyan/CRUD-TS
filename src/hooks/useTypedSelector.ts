import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/addUserReducer";

export let useTypesSelector:TypedUseSelectorHook<RootState> = useSelector