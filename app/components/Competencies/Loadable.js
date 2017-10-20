/**
 *
 * Asynchronously loads the component for Competencies
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
