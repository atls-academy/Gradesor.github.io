import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'

import React                from 'react'
import { FC }               from 'react'
import { useRef }           from 'react'
import { useState }         from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { FieldMessages } from "@identity/messages-fragment";
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { ELoginPasswordFields, TLoginPasswordFieldsErrors } from './login-password.interfaces'

const LoginPassword: FC = () => {
  const { formatMessage } = useIntl()
  const refLogin = useRef<HTMLInputElement>(null);
  const errors = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<TLoginPasswordFieldsErrors>(null);
  const onChangePass = (event: string) => {
    if (Boolean(event.match(/[а-яА-Я]/i))){
      setError({
        [ELoginPasswordFields.login]: { message: "login_password.err.cyryl" },
      });
      return
    }
    if(error)
      setError(null);
  };
  console.log("error", error);
  return (
    <Column>
      <Row height={80}>
        <Column>
          <Row height={56}>
            <Input
              name={ELoginPasswordFields.login}
              placeholder={formatMessage({
                id: "login_password.your_login",
              })}
              onChange={onChangePass}
            />
          </Row>
          <Layout flexBasis={12} />
          {error?.LoginPassword_login?.message && (
            <FieldMessages
              messages={[
                {
                  id: 0,
                  text: formatMessage({
                    id: error?.LoginPassword_login?.message,
                  }),
                  type: "error",
                },
              ]}
            />
          )}
        </Column>
      </Row>
      <Row height={80}>
        <Column>
          <Row height={56}>
            <Input
              name={ELoginPasswordFields.pass}
              placeholder={formatMessage({
                id: "login_password.password",
              })}
            />
          </Row>
          <Layout flexBasis={12} />
        </Column>
      </Row>
      <Button type="submit" size="large" style={{ width: 240 }}>
        <FormattedMessage id="login_password.login" defaultMessage="Login" />
      </Button>
      <Layout flexBasis={16} />
      <Row>
        <Layout flexBasis={12} />
        <Layout width={["100%", "100%", 240]}>
          <NextLink path="/auth/registration">
            <Button>
              <FormattedMessage
                id="login_password.create_account"
                defaultMessage="Create account"
              />
            </Button>
          </NextLink>
        </Layout>
      </Row>
    </Column>
  );
}

export { LoginPassword }
