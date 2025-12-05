import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: 'linear-gradient(135deg, #f5e6d3 0%, #ffd4c4 50%, #e8c9f5 100%)'
    }}>
      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Icon name="Film" size={32} className="text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2 text-[#4a2c7a]">
            {isLogin ? 'Войдите или создайте аккаунт' : 'Создайте аккаунт'}
          </h1>
          
          <p className="text-center text-[#7a5ca8] mb-8">
            Мир кино ждет вас
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-[#9b87f5] uppercase tracking-wide">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="user@cinestream.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 h-14 rounded-2xl border-2 border-[#9b87f5] focus:border-[#7E69AB] bg-white text-gray-900 placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-[#9b87f5] uppercase tracking-wide">
                Пароль
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 h-14 rounded-2xl border-2 border-[#9b87f5] focus:border-[#7E69AB] bg-white text-gray-900"
                required
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-[#9b87f5]"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-[#6E59A5] cursor-pointer"
                  >
                    Запомнить меня
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-[#9b87f5] hover:text-[#7E69AB] font-medium"
                >
                  Забыли пароль?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl bg-[#4a2c7a] hover:bg-[#3a2260] text-white text-lg font-semibold shadow-lg"
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#7a5ca8]">Или продолжить через</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                type="button"
                className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#9b87f5] hover:bg-gray-50 transition-all"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>

              <button
                type="button"
                className="w-14 h-14 rounded-full bg-[#0077FF] flex items-center justify-center hover:bg-[#0066dd] transition-all shadow-lg"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm1.31 10.54l-1.26 4.18c-.18.6-.66.74-1.33.46l-3.67-2.71-1.77 1.7c-.2.2-.36.36-.74.36l.26-3.78 6.8-6.14c.3-.26-.06-.4-.46-.14l-8.4 5.29-3.63-1.13c-.79-.25-.8-.79.16-1.17l14.21-5.48c.66-.23 1.23.16 1.02 1.17l-1.19 6.39z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="text-gray-500">
              {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
            </span>{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#9b87f5] hover:text-[#7E69AB] font-semibold"
            >
              {isLogin ? 'Регистрация' : 'Войти'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
