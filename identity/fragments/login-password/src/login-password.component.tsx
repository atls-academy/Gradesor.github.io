import { Button }           from '@atls-ui-proto/button'
import { Input }            from '@atls-ui-proto/input'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'

const LoginPassword: FC = () => {
  const { formatMessage } = useIntl()
  const onChangePass = (event: string) => {console.log("event", event);};
  return (
    <Column>
      <Row height={80}>
        <Column>
          <Row height={56}>
            <Input
              id="password_identifier"
              placeholder={formatMessage({
                id: "login_password.your_email",
              })}
              onChange={onChangePass}
            />
          </Row>
          <Layout flexBasis={12} />
        </Column>
      </Row>
      <Row height={80}>
        <Column>
          <Row height={56}>
            <Input
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
