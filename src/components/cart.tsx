import './bootstrap.css'
import './components.css'
import './colors.css'
import './core.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart() {
    return (
        <div className="panel panel-flat">
        <div className="panel-heading">
          <div className="page-header page-header-inverse" style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
            <div className="page-header-content">
              <div className="page-title">
                <h5>
                  <ShoppingCartIcon/>
                  <span className="text-semibold">PEDIDO</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <legend className="text-bold"></legend>
          <div className="panel panel-flat">
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table" id="table_produtos">
                  <tbody>
                    <tr>
                      <td hidden>833</td>
                      <td style={{ fontWeight: 'bold' }}>1 X</td>
                      <td style={{ fontWeight: 'bold' }}>SASHIMI KANI 6 PCS</td>
                      <td hidden>25.00</td>
                      <td style={{ fontWeight: 'bold' }}>25.00</td>
                      <td hidden></td>
                      <td hidden>[]</td>
                      <td hidden>[]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td><h4 style={{ fontWeight: 'bold' }}>Total dos Produtos</h4></td>
                <td><h4 className="pull-right" id="total_produtos" style={{ fontWeight: 'bold' }}>R$ 0,00</h4></td>
              </tr>
              <tr>
                <td><h4 style={{ fontWeight: 'bold' }}>Taxa Entrega</h4></td>
                <td><h4 className="pull-right" id="total_entrega" style={{ fontWeight: 'bold' }}>R$ 0,00</h4></td>
              </tr>
              <tr>
                <td><h4 style={{ fontWeight: 'bold' }}>Total</h4></td>
                <td><h4 className="pull-right" id="total_geral" style={{ fontWeight: 'bold' }}>R$ 0,00</h4></td>
              </tr>
            </tbody>
          </table>
        </div>
        <legend className="text-bold"></legend>
        <input type="hidden" name="json_produtos" id="json_produtos" value="[]" />
        <input type="hidden" name="id_loja" id="id_loja" value="6" />
        <input type="hidden" name="total_pedido" id="total_pedido" />
        <center>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold' }}
            id="btEnviarPedido"
          >
            CONFIRMAR PEDIDO
          </button>
        </center>
      </div>
    )
}