// @ts-nocheck
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Input, SxProps } from '@mui/material';
import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { backButton, defaultButton, input, passButton } from "../../../../styles/styles";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { addPassengers, editTransfer } from "../../../../store/slices/transferSlice";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


// interface InfoStepProps {}

// export const InfoStepExample: React.FunctionComponent<InfoStepProps> = () => {
//   return (
//     <>
//       <p className="order__description">Личные данные поедки</p>
//       <br />
//       <hr />
//       <div className="label">В разработке</div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Пассажир 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </>
//   );
// };




interface PassengerInfoStepProps {}

function createArrayWithNumbers(length: any) {
  return Array.from({ length }, (_, i) => i);
}

const validationSchema = yup.object({
  passengers: yup.array(
    yup.object({
      fullName: yup.string().required('Обязательное поле'),
      passportId: yup.string().required('Обязательное поле'),
      telegramId: yup.string().matches(/@([A-Za-z0-9_]{1,15})/, 'Ник должен содержать @').required('Обязательное поле'),
      phoneNumber: yup.string().required('Обязательное поле'),
      departureDate: yup.string().required('Обязательное поле'),
      departureTime: yup.string().required('Обязательное поле'),
    })
  )
});

export const InfoStep: React.FunctionComponent<PassengerInfoStepProps> = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState } = useForm<any>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const {transfer} = useAppSelector(state => state.transfers)
  const navigate = useNavigate()
  const passengersValue = transfer.passengers.length;

  const { isValid, errors } = formState;
  console.log(isValid, errors)

  const up = (arr:any, data: any) => {
    let newArr = arr.map((obj: any, index: any) => {
      return {...obj, ...data.passengers[index]}
    })
    return newArr
  }


  const updateData = (transfer:any, data: any, id: any) => {
    dispatch(addPassengers({passengers: up(transfer ,data)}))
    dispatch(editTransfer(id, {passengers: up(transfer, data)}))
    navigate('/transfers/ordered/final')
  }
  
  return (
    <form className="page-long" onSubmit={handleSubmit((d) => updateData(transfer.passengers, d, transfer.id))}>
        <div>
          <h1 className="page-long__title">Заказанные поездки</h1>
          <p className="order__description">
            Отлично! Мы почти у цели:) Для оформления <br />
            трансфера нам потребуются некоторые <br />
            данные о тебе. Пожалуйста, заполни форму <br />
            на каждого пассажира.
          </p>
          {createArrayWithNumbers(passengersValue).map((number) => {
            return (
              <div>
              <div key={transfer.passengers[number].id}>
                <br />
                <hr />
                <br />
                <div className="passss">{`Пассажир ${number + 1}`}</div>
                <div className="fullname">ФИО</div>
                <Input defaultValue={transfer.passengers[number].fullName} sx={input} type="text" {...register(`passengers[${number}].fullName`)} />
                {errors.passengers && <p className="error">{
                //@ts-ignore
                errors?.passengers[number as string]?.fullName?.message as any}</p>}
                <div className="label">Номер загранпаспорта</div>
                <Input defaultValue={transfer.passengers[number].passportId} sx={input} type="text" {...register(`passengers[${number}].passportId`)} />
                {errors.passengers && <p className="error">{
                //@ts-ignore
                errors?.passengers[number as string]?.passportId?.message as any}</p>}
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div>
                    <div className="label">Дата вылета</div>
                    <Input
                      defaultValue={transfer.passengers[number].departureDate}
                      type="date"
                      sx={{ ...input, width: '164px' }}
                      {...register(`passengers[${number}].departureDate`)}
                    />
                    {errors.passengers && <p className="error">{
                //@ts-ignore
                errors?.passengers[number as string]?.departureDate?.message as any}</p>}
                  </div>
                  <div>
                    <div className="label">Время вылета</div>
                    <Input
                    defaultValue={transfer.passengers[number].departureTime}
                      type="time"
                      sx={{ ...input, width: '164px' }}
                      {...register(`passengers[${number}].departureTime`)}
                    />
                    {errors.passengers && <p className="error">{
                //@ts-ignore
                errors?.passengers[number as string]?.departureTime?.message as any}</p>}
                  </div>
                </div>
                <div className="label">Номер телефона</div>
                <Input defaultValue={transfer.passengers[number].phoneNumber} sx={input} {...register(`passengers[${number}].phoneNumber`)} />
                {errors.passengers && <p className="error">{
                //@ts-ignore
                errors?.passengers[number as string]?.phoneNumber?.message as any}</p>}
                <div className="label">Логин в телеграмме</div>
                <Input defaultValue={transfer.passengers[number].telegramId} sx={input} {...register(`passengers[${number}].telegramId`)} />
                {errors.passengers && <p className="error">{
                //@ts-ignore
                errors?.passengers[number as string]?.telegramId?.message as any}</p>}
                <div className="label">Комментарий к поездке</div>
                <Input
                defaultValue={transfer.passengers[number].transferComment}
                  sx={input}
                  multiline={true}
                  minRows={3}
                  {...register(`passengers[${number}].transferComment`)}
                />
              </div>
              </div>
            );
          })}
          {/* <Button sx={passButton} onClick={() => setPassengersValue((prev: any) => prev + 1)}>
            Добавить пассажира
          </Button> */}
          <p className="help">
            При возникновении вопросов на этапе бронирования, пожалуйста, обратитесь к ассистенту @assistantkas
          </p>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Button  sx={backButton} onClick={() => navigate(-1)}>Назад</Button>
          <Button disabled={!isValid} sx={defaultButton} type='submit'>Далее</Button>
        </div>
    </form>
  )
}