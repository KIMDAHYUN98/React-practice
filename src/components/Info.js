import { useEffect, useState } from 'react';

export default function Info() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 맨 처음 렌더링 될 때만 실행되고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어있는 배열로 넣어주면 된다.
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('umonout');
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input type='text' value={name} onChange={onChangeName}/>
        <input type='text' value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickname}
      </div>
    </>
  );
};