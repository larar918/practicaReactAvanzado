import { useNavigate, useParams } from 'react-router';
import { deleteAd } from '../service';
import { useDispatch, useSelector } from 'react-redux';
import { getAd } from '../../../store/selectors';
import { adDeleted } from '../../../store/actions';

import Layout from '../../../components/Layout';
import ButtonConfirm from '../components/buttonConfirm';
import '../../../styles/components.css'


function AdvertPage() {
  const params = useParams();
  const ad = useSelector(getAd(params.id));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteAd = async event => {
    event.preventDefault();
    await deleteAd(params.id);
    dispatch(adDeleted(params.id));
    navigate('/adverts');
  }

  return (
    <Layout>
      <div className="ad-detail-container">
        {ad && (
          <article className="ad-detail ad">
            <div>
              <p><b>Nombre: </b>{ad.name}</p>
              <p><b>Transacción: </b>{ad.sale ? 'Venta' : 'Compra'}</p> 
              <p><b>Precio: </b>{ad.price}</p>
              <p><b>Tags: </b> {ad.tags.join(', ')}</p>
              {ad.photo !== null && <p><b>Foto: </b> {ad.photo}</p>} 
            </div>
          </article>
        )}
        <ButtonConfirm onDelete={handleDeleteAd} />
      </div>
    </Layout>
  );
}

export default AdvertPage;

