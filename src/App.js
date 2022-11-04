
import { RouterProvider } from 'react-router-dom';
import { router } from '../src/routes/routes';
import useTitle from './Hooks/useTitle';


function App() {

  useTitle('Home')
 
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
