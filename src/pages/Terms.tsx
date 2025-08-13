import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import type { ServiceAgreement } from '../types';
import IconSvg from '../assets/icon.svg';

const Terms: React.FC = () => {
  const navigate = useNavigate();
  const [agreements, setAgreements] = useState<ServiceAgreement>({
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
  });
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showMarketingModal, setShowMarketingModal] = useState(false);

  const handleAgreementChange = (field: keyof ServiceAgreement) => {
    if (field === 'all') {
      const newValue = !agreements.all;
      setAgreements({
        all: newValue,
        terms: newValue,
        privacy: newValue,
        marketing: newValue,
      });
    } else {
      const newAgreements = {
        ...agreements,
        [field]: !agreements[field],
      };
      
      // 모든 개별 약관이 체크되었는지 확인
      const allChecked = newAgreements.terms && newAgreements.privacy && newAgreements.marketing;
      newAgreements.all = allChecked;
      
      setAgreements(newAgreements);
    }
  };

  const handleNext = () => {
    if (agreements.terms && agreements.privacy) {
      navigate('/connect-services');
    }
  };

  const handleTermsClick = () => {
    setShowTermsModal(true);
  };

  const handlePrivacyClick = () => {
    setShowPrivacyModal(true);
  };

  const handleMarketingClick = () => {
    setShowMarketingModal(true);
  };

  const isFormValid = agreements.terms && agreements.privacy;

  return (
    <Layout showBottomTab={false} className={showTermsModal || showPrivacyModal || showMarketingModal ? 'relative' : ''}>
      {showTermsModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">이용약관</h3>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <h4 className="font-semibold text-black">제1조 (목적)</h4>
              <p>이 약관은 모피티(이하 "회사")가 제공하는 AI 마케팅 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
              
              <h4 className="font-semibold text-black">제2조 (정의)</h4>
              <p>1. "서비스"란 회사가 제공하는 AI 기반 마케팅 분석 및 컨설팅 서비스를 의미합니다.</p>
              <p>2. "이용자"란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
              
              <h4 className="font-semibold text-black">제3조 (약관의 효력 및 변경)</h4>
              <p>1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</p>
              <p>2. 회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.</p>
              
              <h4 className="font-semibold text-black">제4조 (서비스의 제공)</h4>
              <p>회사는 이용자에게 다음과 같은 서비스를 제공합니다:</p>
              <p>1. AI 기반 마케팅 데이터 분석</p>
              <p>2. 맞춤형 마케팅 전략 제안</p>
              <p>3. 기타 회사가 정하는 서비스</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowTermsModal(false)}
                className="w-full h-12 rounded-xl bg-yellow-400 text-black font-medium"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {showPrivacyModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">개인정보 수집 및 이용동의</h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <h4 className="font-semibold text-black">1. 개인정보의 수집 및 이용 목적</h4>
              <p>• 서비스 제공 및 계약 이행</p>
              <p>• 회원 가입 및 관리</p>
              <p>• AI 마케팅 분석 서비스 제공</p>
              <p>• 고객 상담 및 불만 처리</p>
              
              <h4 className="font-semibold text-black">2. 수집하는 개인정보의 항목</h4>
              <p>• 필수항목: 이름, 연락처, 이메일, 사업자 정보</p>
              <p>• 선택항목: 업종, 매출 데이터, SNS 정보</p>
              
              <h4 className="font-semibold text-black">3. 개인정보의 보유 및 이용기간</h4>
              <p>• 회원 탈퇴 시까지 또는 서비스 이용 종료 시까지</p>
              <p>• 관계법령에 따른 보존의무가 있는 경우 해당 기간까지</p>
              
              <h4 className="font-semibold text-black">4. 개인정보 처리 거부 권리</h4>
              <p>개인정보 수집·이용에 대한 동의를 거부할 권리가 있으나, 필수 항목에 대한 동의 거부 시 서비스 이용이 제한될 수 있습니다.</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-full h-12 rounded-xl bg-yellow-400 text-black font-medium"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {showMarketingModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">마케팅 정보 수신 동의</h3>
              <button
                onClick={() => setShowMarketingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <h4 className="font-semibold text-black">1. 마케팅 정보 제공 목적</h4>
              <p>• 신규 서비스 및 이벤트 정보 안내</p>
              <p>• 맞춤형 마케팅 콘텐츠 제공</p>
              <p>• 업계 트렌드 및 인사이트 정보 제공</p>
              
              <h4 className="font-semibold text-black">2. 제공받는 마케팅 정보</h4>
              <p>• 이메일: 주간 마케팅 리포트, 신규 기능 안내</p>
              <p>• SMS: 중요 업데이트 및 이벤트 알림</p>
              <p>• 앱 푸시: 실시간 분석 결과 및 추천사항</p>
              
              <h4 className="font-semibold text-black">3. 마케팅 정보 수신 거부</h4>
              <p>• 언제든지 수신 거부 가능</p>
              <p>• 마이페이지에서 설정 변경 가능</p>
              <p>• 이메일 하단의 '수신거부' 링크 이용 가능</p>
              
              <h4 className="font-semibold text-black">4. 동의 철회</h4>
              <p>마케팅 정보 수신에 대한 동의는 선택사항이며, 동의하지 않아도 서비스 이용에 제한이 없습니다.</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowMarketingModal(false)}
                className="w-full h-12 rounded-xl bg-yellow-400 text-black font-medium"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col flex-1 px-6 pt-4">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-gray-500">2 / 3</span>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={IconSvg} alt="icon" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-black">
            서비스를 이용하기 위해서<br />
            아래 이용약관에 동의해 주세요.
          </h1>
          <p className="text-base text-gray-600">
            필수 약관에 동의해야 서비스를 사용할 수 있어요.
          </p>
        </div>

        <div className="flex-1">
          <div className="space-y-6">
            {/* 전체 동의 */}
            <div 
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer"
              onClick={() => handleAgreementChange('all')}
            >
              <span className="text-lg font-medium text-black">
                모두 동의합니다.
              </span>
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  agreements.all ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300'
                }`}>
                  {agreements.all && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" className="ml-2 text-gray-400">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* 개별 약관들 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <button 
                  className="text-base text-gray-700 cursor-pointer hover:text-gray-900"
                  onClick={handleTermsClick}
                >
                  이용약관(필수)
                </button>
                <div className="flex items-center">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      agreements.terms ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300'
                    }`}
                    onClick={() => handleAgreementChange('terms')}
                  >
                    {agreements.terms && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    )}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="ml-2 text-gray-400">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button 
                    className="text-base text-gray-700 cursor-pointer hover:text-gray-900"
                    onClick={handlePrivacyClick}
                  >
                    개인정보 수집 및 이용동의(필수)
                  </button>
                </div>
                <div className="flex items-center">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      agreements.privacy ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300'
                    }`}
                    onClick={() => handleAgreementChange('privacy')}
                  >
                    {agreements.privacy && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    )}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="ml-2 text-gray-400">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button 
                    className="text-base text-gray-700 cursor-pointer hover:text-gray-900"
                    onClick={handleMarketingClick}
                  >
                    마케팅 정보 수신 동의(선택)
                  </button>
                </div>
                <div className="flex items-center">
                  <div 
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      agreements.marketing ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300'
                    }`}
                    onClick={() => handleAgreementChange('marketing')}
                  >
                    {agreements.marketing && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    )}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" className="ml-2 text-gray-400">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8 pt-8">
          <Button onClick={handleNext} disabled={!isFormValid}>
            동의합니다
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
