import { Route, Routes } from 'react-router-dom';
import Layout from 'layouts';
import LayoutWithoutHeader from 'layouts/LayoutWithoutHeader';
import LayoutWithoutNav from 'layouts/LayoutWithoutNav';

import {
  Qna,
  Main,
  Login,
  Community,
  NewPost,
  MyPage,
  QnaDetail,
  AuthExpert,
  Signup,
  PetProfileEditor,
  ExpertProfileEditor,
} from 'pages';
import ExpertProfile from 'pages/ExpertProfile';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<Main />} />
        <Route path='/qna' element={<Qna />} />
        <Route path='/community' element={<Community />} />

        <Route path='/mypage' element={<MyPage />} />
      </Route>

      <Route path='/' element={<LayoutWithoutNav />}>
        <Route path='/qna/newpost' element={<NewPost />} />
        <Route path='/qna/detail' element={<QnaDetail />} />

        <Route path='/mypage/experts' element={<AuthExpert />} />

        {/* 프로필 작성 */}
        <Route path='/profile/pets' element={<PetProfileEditor />} />
        <Route path='/profile/experts' element={<ExpertProfileEditor />} />

        {/* 프로필 보기 */}
        <Route path='/experts/:id' element={<ExpertProfile />} />
      </Route>

      <Route path='/' element={<LayoutWithoutHeader />}>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/Signup' element={<Signup />} />
      </Route>
    </Routes>
  );
}
