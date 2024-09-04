import { useEffect } from 'react';
import axios from 'axios';
import DropdownMenu from '../components/common/DropdownMenu';

const Home = () => {
  const testClick = async () => {
    try {
      let res = await axios.get('http://localhost:8090/public/testApi');
      delete res.data.id;
      let resData = Object.values(res.data);
      console.log(resData);
    } catch (error) {
      console.error('API 호출 실패:', error);
    }
  };

  useEffect(() => {
    testClick();
  }, []);

  const calendars = [
    { value: 'work', label: 'Work Calendar' },
    { value: 'personal', label: 'Personal Calendar' },
    { value: 'holiday', label: 'Holiday Calendar' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">토이캘린더</div>
        <nav className="flex-1">
          <ul className="mt-4">
            <li>
              <DropdownMenu options={calendars} />
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* 콘텐츠 영역 */}
      <div className="flex-1 p-6">
        {/* 헤더 */}
        <div className="bg-white shadow rounded-lg mb-6 p-4 flex items-center justify-between text-black">
          <h1 className="text-2xl font-semibold">
            Welcome to the Admin Dashboard
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            New Task
          </button>
        </div>
        {/* 주요 콘텐츠 */}
        <div className="bg-white shadow rounded-lg p-6 text-black">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p>
            Here you can add various widgets or information to provide an
            overview of the system.
          </p>
          {/* 더 많은 콘텐츠와 위젯을 여기에 추가 */}
        </div>
      </div>
    </div>
  );
};

export default Home;
