import { FC, useState } from "react";
import { Layout } from "../../widgets";
import styles from "./Account.module.scss";
import { Button, Dropdown, Input, Text } from "../../shared";

export const AccountPage: FC = (): JSX.Element => {
  const [isActiveProfile, setIsActiveProfile] = useState<boolean>(false);
  const [isActiveSecurity, setIsActiveSecurity] = useState<boolean>(false);
  const [isActiveFamily, setIsActiveFamily] = useState<boolean>(false);
  const [isActiveCenter, setIsActiveCenter] = useState<boolean>(false);

  return (
    <Layout>
      <div className={styles.account}>
        <Text type="h3">
          <span>Основные</span>
        </Text>

        <Dropdown
          name={
            <>
              <img src="/account/user.svg" alt="user" /> Профиль
            </>
          }
          isActive={isActiveProfile}
          setIsActive={setIsActiveProfile}
          act_height={600}
        >
          <Input placholder="Имя" />
          <Input placholder="Фамилия" />
          <Input placholder="Дата рождения" />
          <Input placholder="Интерес к" />
          <Input placholder="Страна" />
          <Input placholder="Город" />
          <Input placholder="Адрес" />
          <Input placholder="Логин" />
        </Dropdown>
        <Dropdown
          name={
            <>
              <img src="/account/security.svg" alt="security" /> Защита профиля
            </>
          }
          isActive={isActiveSecurity}
          setIsActive={setIsActiveSecurity}
          act_height={205}
        >
          <Input placholder="Номер телефона" />
          <Input placholder="Эл.почта" />
        </Dropdown>
        <Dropdown
          name={
            <>
              <img src="/account/family.svg" alt="family" /> Моя семья
            </>
          }
          isActive={isActiveFamily}
          setIsActive={setIsActiveFamily}
          act_height={205}
        >
          <Input />
          <Input />
        </Dropdown>
        <Dropdown
          name={
            <>
              <img src="/account/center.svg" alt="center" /> Ведущий центр
            </>
          }
          isActive={isActiveCenter}
          setIsActive={setIsActiveCenter}
          act_height={205}
        >
          <Input />
          <Input />
        </Dropdown>

        <Text type="h3">
          <span>Другое</span>
        </Text>
        <div className={styles.other}>
          <Button type="social">
            <img src="/account/1.svg" alt="1" /> Подписки
          </Button>{" "}
          <Button type="social">
            <img src="/account/2.svg" alt="2" /> Сохраненное
          </Button>{" "}
          <Button type="social">
            <img src="/account/3.svg" alt="3" /> Покупки
          </Button>
        </div>
      </div>
    </Layout>
  );
};
