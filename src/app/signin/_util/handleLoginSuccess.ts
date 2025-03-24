import { Role } from '@/types/user';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { University } from '@/types/university';
import { SigninResponse } from '../signin';

type SetState<T> = (value: T) => void;

export default function handleLoginSuccess(
  response: SigninResponse,
  router: AppRouterInstance,
  setIsLoggedIn: SetState<boolean>,
  setRole: SetState<Role>,
  setUniv: SetState<University>,
  setPhotographerId: SetState<number>,
) {
  setIsLoggedIn(true);
  setRole(response.data!.role as Role);
  document.cookie = `accessToken=${response.data!.accessToken}`;

  if (response.data?.univ) {
    setUniv(response.data?.univ);
  }

  if (response.data?.photographerId) {
    setPhotographerId(response.data?.photographerId);
  }
  console.log(response.data);

  if (!response.data?.isFirst) {
    router.push('/signin/first');
    return;
  }

  router.push('/home');
}
