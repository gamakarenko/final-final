import { Button, Input, SxProps } from "@mui/material";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";


interface PassengerInfoStepProps {
    
}

const button : SxProps = {
    width: '343px',
    height: '40px',
    background: "#F2F2F2",
    border: "1px solid #007AFF",
    borderRadius: "8px",
    fontStyle: "normal",
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '18px',
    textTransform: 'none',
    marginBottom: '20px',
}

const input : SxProps = {
        width: "100%",
        minHeight: "45px",
        background: '#E9E9E9',
        border: '1px solid #ADADAD',
        borderRadius: '5px',
        outline: 'none',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        "&:before": {
          borderBottom: 'none'
        }
}

function createArrayWithNumbers(length: any) {
    return Array.from({ length }, (_, i) => i);
  }
 
export const AltPassengerInfoStep: React.FunctionComponent<PassengerInfoStepProps> = () => {
    const { register } = useFormContext()
    const [ passengersValue, setPassengersValue ] = useState(1)
    return ( 
        <>
            <p className="order__description">
            Отлично! Мы почти у цели:) Для оформления <br/>
            трансфера нам потребуются некоторые <br/>
            данные о тебе. Пожалуйста, заполни форму <br/>
            на каждого пассажира.
            </p>
            <br />
            <hr/>
            {createArrayWithNumbers(passengersValue).map((number) => {
            return (
                <div key={number}>
            <div className="fullname">ФИО</div>
            <Input sx={input} type="text" {...register(`order.passengers[${number}].fullName`)} />
            <div className="label">Номер загранпаспорта</div>
            <Input sx={input} type="text" {...register(`order.passengers[${number}].passportId`)} />
            <div style={{display: "flex", gap: '15px'}}>
                <div>
                <div className="label">Дата вылета</div>
                <Input type="date" sx={{...input, width: '164px'}} {...register(`order.passengers[${number}].departureDate`)}/>
                </div>
                <div>
                <div className="label">Время вылета</div>
                <Input type="time" sx={{...input, width: '164px'}}  {...register(`order.passengers[${number}].departureTime`)}/>
                </div>
            </div>
            <div className="label">Номер телефона</div>
            <Input sx={input} {...register(`order.passengers[${number}].phoneNumber`)} />
            <div className="label">Логин в телеграмме</div>
            <Input sx={input} {...register(`order.passengers[${number}].telegramId`)} />
            <div className="label">Комментарий к поездке</div>
            <Input sx={input} multiline={true} minRows={3} {...register(`order.passengers[${number}].transferComment`)} />
            <p className="help">При возникновении вопросов на этапе бронирования, пожалуйста, обратитесь к ассистенту @...</p>
            </div>
            )})
            }
            <Button sx={button} onClick={() => setPassengersValue((prev) => prev + 1)} >Добавить пассажира</Button>       
        </>
     );
}

export function AltPassengerInfoStp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [size, setSize] = useState(1);
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  console.log(errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {createArrayWithNumbers(size).map((number) => {
          return (
            <div key={number}>
              <div>
                <label htmlFor={`firstName.${number}`}>First Name</label>
                <input
                  id={`firstName.${number}`}
                  placeholder="first name"
                  {...register(`firstName.${number}`, { required: true })}
                />
              </div>

              <div>
                <label htmlFor={`lastName.${number}`}>Last Name</label>
                <input
                  id={`firstName.${number}`}
                  placeholder="last name"
                  {...register(`lastName.${number}`, { required: true })}
                />
              </div>

              <div>
                <label htmlFor={`email.${number}`}>Email</label>
                <input
                  id={`email.${number}`}
                  placeholder="email"
                  {...register(`email.${number}`, { required: true })}
                />
              </div>

              <hr />
            </div>
          );
        })}

        <button type="button" onClick={() => setSize(size + 1)}>
          Add Person
        </button>
        <br />
        <div style={{ color: 'red' }}>
          {Object.keys(errors).length > 0 &&
            'There are errors, check your console.'}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}