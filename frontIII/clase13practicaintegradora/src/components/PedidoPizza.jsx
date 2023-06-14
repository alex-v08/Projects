import React, { useState } from 'react';

const PedidoPizza = () => {
  const [pedidoVisible, setPedidoVisible] = useState(true);

  const handleCancelarPedido = () => {
    setPedidoVisible(false);
  };

  return (
    <div>
      {pedidoVisible && <Hijo cancelarPedido={handleCancelarPedido} />}
    </div>
  );
};

const Hijo = ({ cancelarPedido }) => {
  const [ingredienteVisible, setIngredienteVisible] = useState(true);

  const handleCancelar = () => {
    setIngredienteVisible(false);
    cancelarPedido();
  };

  return (
    <div>
      {ingredienteVisible && <h2>Ingrediente: Pizza</h2>}
      <button onClick={handleCancelar}>Cancelar pedido</button>
    </div>
  );
};

export default PedidoPizza;
