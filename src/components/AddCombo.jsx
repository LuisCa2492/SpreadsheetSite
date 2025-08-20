import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddCombo = ({ texto }) => {

  const [verContrasena, setVerContrasena] = useState(false);
  const EsquemaValidaciones = Yup.object({
    descripcion: Yup.string().required('La descripción es obligatoria'),
    deck: Yup.string().required('El nombre del deck es obligatorio'),
    enlace: Yup.string().url('Debes usar un enlace valido').matches(/^https:\/\//, "El enlace debe comenzar con https://")
      .required("El enlace es obligatorio"),
  });

  const valoresInicialesForm = {
    descripcion: '',
    deck: '',
    enlace: ''
  };

  // 3. Función que se ejecuta al enviar el formulario
  const onSubmit = (values, { resetForm }) => {
    console.log("Datos enviados:", values);
    resetForm();
  };
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)", // 12 columnas
          gap: 2
        }}
      >
        <Box sx={{ gridColumn: "span ", bgcolor: "", p: 2, color: "white" }}></Box>
        <Box sx={{ gridColumn: "span 6", bgcolor: "", p: 2, color: "" }}>
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>Agregar nuevo combo</h1>
          <Formik
            initialValues={valoresInicialesForm}
            validationSchema={EsquemaValidaciones}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => (
              <Form>
                <TextField
                  label='Nombre del deck'
                  name='deck'
                  value={values.deck}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.deck && Boolean(errors.deck)}
                  helperText={touched.deck && errors.deck}
                  fullWidth
                  margin='normal'
                />
                <TextField
                  label='Descripcion'
                  name='descripcion'
                  value={values.descripcion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.descripcion && Boolean(errors.descripcion)}
                  helperText={touched.descripcion && errors.descripcion}
                  fullWidth
                  margin='normal'
                />
                <TextField
                  label='Enlace'
                  name='enlace'
                  value={values.enlace}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.enlace && Boolean(errors.enlace)}
                  helperText={touched.enlace && errors.enlace}
                  fullWidth
                  margin='normal'
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="submit" variant="contained" color="primary">
                    Enviar
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
        <Box sx={{ gridColumn: "span 3", bgcolor: "", p: 2, color: "white" }}></Box>

      </Box>



    </>
  )
}

export default AddCombo
