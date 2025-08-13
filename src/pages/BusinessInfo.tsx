import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import type { BusinessInfo as BusinessInfoType } from '../types';
import IconSvg from '../assets/icon.svg';

const BusinessInfo: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BusinessInfoType>({
    name: '',
    category: '',
    location: '',
    description: '',
  });

  const handleInputChange = (field: keyof BusinessInfoType, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressSearch = () => {
    new (window as any).daum.Postcode({
      oncomplete: function(data: any) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
        let addr = ''; // 주소 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }

        handleInputChange('location', addr);
      }
    }).open();
  };

  const handleNext = () => {
    if (formData.name && formData.category && formData.location) {
      navigate('/terms');
    }
  };

  const isFormValid = formData.name && formData.category && formData.location;

  return (
    <Layout showBottomTab={false}>
      <div className="flex flex-col flex-1 px-6 pt-4">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-gray-500">1 / 3</span>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={IconSvg} alt="icon" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-black">
            사장님의 비즈니스를<br />
            알려주세요.
          </h1>
          <p className="text-base text-gray-600">
            입력하신 정보를 바탕으로 주변 상권과 트렌드를<br />
            분석해 드려요.
          </p>
        </div>

        <div className="space-y-6 flex-1">
          {/* 업체명 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              업체명
            </label>
            <input
              type="text"
              placeholder="업체명을 입력해 주세요"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
            />
          </div>

          {/* 업종 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              업종
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none appearance-none bg-white"
            >
              <option value="">업종을 선택해 주세요</option>
              <option value="음식점">음식점</option>
              <option value="카페">카페</option>
              <option value="소매업">소매업</option>
              <option value="서비스업">서비스업</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 주소 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              주소
            </label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                <input
                  type="text"
                  placeholder="건물, 지번 또는 도로명을 검색하세요"
                  value={formData.location}
                  onClick={handleAddressSearch}
                  readOnly
                  className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none cursor-pointer"
                />
              </div>
              <input
                type="text"
                placeholder="상세주소를 입력해 주세요"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pb-8 pt-8">
          <Button onClick={handleNext} disabled={!isFormValid}>
            다음
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessInfo;
