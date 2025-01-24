# 로그인 여부에 따라 다른 화면을 보여주고 싶다

[구현 방법]

1. `@/lib/authentication` 에서 isUserAuthenticated 를 가져온다.

2. 페이지 접근할 때, 토큰 정보가 있는지 없는지 확인하는 코드를 작성한다.
   아래와 같다.

`layout.tsx`

```tsx
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  async function checkAuth() {
    try {
      // Call the server-side function to check authentication
      const authResult = await isUserAuthenticated();

      setIsAuthenticated(authResult);
      setIsLoading(false);
    } catch (error) {
      console.error('Authentication check failed', error);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }

  checkAuth();
}, []);
```

2. 존재하지 않으면 로그인 페이지로(혹은 splash, modal 경고 알람) 존재하면, 다음 컨텐츠(children : page.tsx)로 접근가능하도록 한다.

```tsx
// option : Show loading state
if (isLoading) {
  return <div>Loading...</div>;
}

// Redirect if not authenticated
if (!isAuthenticated) {
  redirect('/signin');
}

return <>{children}</>;
```
