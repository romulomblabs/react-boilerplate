import type { TypedUseSelectorHook } from "react-redux";
// eslint-disable-next-line no-duplicate-imports
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
