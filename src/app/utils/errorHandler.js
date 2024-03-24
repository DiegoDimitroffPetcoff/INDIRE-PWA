import Alert from "react-bootstrap/Alert";

export const ErrorHandler = ({ errorDescription }) => {
  return (
    <Alert key="danger" variant="danger">
      Houve um erro ao tentar executar a ação. Mais detalhes: {errorDescription}
    </Alert>
  );
};
