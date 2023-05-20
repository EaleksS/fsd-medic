import { FC, useState } from "react";
import { Layout } from "../../widgets";
import styles from "./Account.module.scss";
import { Button, Dropdown, Input, Text } from "../../shared";

export const AccountPage: FC = (): JSX.Element => {
  const [isActiveProfile, setIsActiveProfile] = useState<boolean>(false);
  const [isActiveSecurity, setIsActiveSecurity] = useState<boolean>(false);
  const [isActiveFamily, setIsActiveFamily] = useState<boolean>(false);

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
        >
          <Input />
          <Input />
        </Dropdown>
        <Button type="default">
          <Text type="h2" fw="500" fz="1rem">
            <img src="/account/center.svg" alt="center" /> Ведущий центр
          </Text>
          <img className={styles.arrow} src="/arrow.svg" alt="arrow" />
        </Button>

        <Text type="h3">
          <span>Другое</span>
        </Text>
        <div className={styles.other}>
          <Button type="default">
            <Text type="h2" fw="500" fz="1rem">
              <img src="/account/1.svg" alt="1" /> Подписки
            </Text>

            <img className={styles.arrow} src="/arrow.svg" alt="arrow" />
          </Button>
          <Button type="default">
            <Text type="h2" fw="500" fz="1rem">
              <img src="/account/2.svg" alt="2" /> Подписки
            </Text>
            <img src="/arrow.svg" alt="arrow" />
          </Button>
          <Button type="default">
            <Text type="h2" fw="500" fz="1rem">
              <img src="/account/3.svg" alt="3" /> Подписки
            </Text>
            <img src="/arrow.svg" alt="arrow" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};
