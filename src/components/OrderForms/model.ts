import { InferType } from "yup";
import { validationSchema } from "./validationShema";


export type TValidationSchema = InferType<typeof validationSchema>