import { Form } from "./Form";

export const FormEvent = () => {
  return (
    <div className="bg-black bg-opacity-80 rounded-lg border border-primary min-h-[42.15rem] lg:w-[37.85rem] xs:w-[90%] flex items-center justify-center flex-col py-12">
      <h2 className="text-[2.615rem] leading-[2.4rem] text-center text-[#f9f4cb] tracking-widest">
        COMPLETA LOS DATOS <br />
        Y LLÉVATE UNA BOLETA <br />
        DOBLE PARA IR AL GRAN ACTO.
      </h2>
      <p className="text-primary font-StageGroteskRegular text-sm text-center my-8">
        *Este es un evento para mayores de 18 años, las boletas serán entregadas{" "}
        <br />a las primeras 100 personas que completen el formulario.
      </p>
      <Form/>
    </div>
  );
};
