import { useMutation, useQuery } from "@apollo/react-hooks";
import { Button, Card, Form as AntdForm, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Form as FinalForm } from "react-final-form";
import { useField, useForm } from "react-final-form-hooks";

import Alert from "../components/alert/alert";
import FieldFormAntd from "../components/field-form-ant-d/field-form-ant-d";
import ModalCenter from "../components/modal-center/modal-center";
import Title from "../components/title/title";

import { INFO, UPDATE } from "../queries/queries";
import AntdHeader from "./antd-header";

const Main = () => {
  const infoRequest = useQuery(INFO);
  const [updateRequest] = useMutation(UPDATE);

  const [initialized, setInitialized] = useState(false);
  const [processing, setProcessing] = useState(false);
  const { form, handleSubmit } = useForm({
    onSubmit: async (values: any) => {
      setProcessing(true);
      await updateRequest({ variables: { input: values } });
      setProcessing(false);
    },
  });

  useEffect(() => {
    if (!infoRequest.loading && !initialized && infoRequest.data) {
      setInitialized(true);

      const info = infoRequest.data.infoRegister || {};
      form.reset({
        city: info.city,
        name: info.name,
        neighborhood: info.neighborhood,
        numberStreet: info.numberStreet,
        state: info.state,
        street: info.street,
        zip: info.zip,
      });
    }
  });

  const name = useField("name", form);
  const zip = useField("zip", form);
  const street = useField("street", form);
  const numberStreet = useField("numberStreet", form);
  const neighborhood = useField("neighborhood", form);
  const city = useField("city", form);
  const state = useField("state", form);

  return (
    <AntdHeader>
      {infoRequest.loading && (
        <ModalCenter>Loading...</ModalCenter>
      )}
      {infoRequest.error && (
        <ModalCenter>Error :( {infoRequest.error.message}</ModalCenter>
      )}
      {!infoRequest.loading && !infoRequest.error && (
        <Layout>
          <Layout.Header><Title>Digi Form</Title></Layout.Header>
          <Layout.Content>
            <Card>
              <FinalForm
                onSubmit={handleSubmit}
                render={() => (
                  <AntdForm>
                    <FieldFormAntd placeholder="nome" data={name} disabled={processing} />
                    <FieldFormAntd placeholder="cep" data={zip} disabled={processing} />
                    <FieldFormAntd placeholder="rua" data={street} disabled={processing} />
                    <FieldFormAntd placeholder="número" data={numberStreet} disabled={processing} />
                    <FieldFormAntd placeholder="bairro" data={neighborhood} disabled={processing} />
                    <FieldFormAntd placeholder="cidade" data={city} disabled={processing} />
                    <FieldFormAntd placeholder="estado" data={state} disabled={processing} />
                    {!processing && (
                      <Button type="primary" onClick={() => form.submit()}>Enviar</Button>
                    )}
                    {processing && (
                      <Alert>Processando...</Alert>
                    )}
                  </AntdForm>
                )}
              />
            </Card>
          </Layout.Content>
        </Layout>
      )}
    </AntdHeader>
  );
};

export default Main;
