import type { ActionFunction, LinksFunction } from 'remix';
import { Form, useActionData } from 'remix';
import * as yup from 'yup';

import Card, { links as cardLinks } from '~/components/atoms/Card';
import Toast, { links as toastLinks } from '~/components/atoms/Toast';
import useToast from '~/components/atoms/Toast/useToast';
import useAccessibleForm from '~/hooks/useAccessibleForm';
import formStyles from '~/styles/form.css';
import styles from '~/styles/routes/index.css';
import validate from '~/utils/validation';

export const links: LinksFunction = () => [
  ...cardLinks(),
  ...toastLinks(),
  { rel: 'stylesheet', href: formStyles },
  { rel: 'stylesheet', href: styles },
];

const validationSchema = yup.object({
  firstName: yup.string().required('First name is a required field').nullable(),
  lastName: yup.string().required('Last name is a required field').nullable(),
  email: yup
    .string()
    .email('Please give up a valid email')
    .required('Email is a required field')
    .nullable(),
});

type ActionData = {
  hasErrors: boolean;
  errors?: Record<string, string>;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const actionData = await validate(values, validationSchema);

  return actionData;
};

const Index = () => {
  const { toastRef, showToast } = useToast();
  const actionData = useActionData<ActionData>();

  const { formRef } = useAccessibleForm({
    hasErrors: actionData?.hasErrors,
    errors: actionData?.errors,
    showToast,
  });

  return (
    <main>
      <Toast ref={toastRef} />
      <section>
        <h1 className="display">Accessible Forms</h1>
        <Form method="post" ref={formRef} aria-label="Personal information form" noValidate>
          <Card>
            <h2 className="card-header headline">Personal information</h2>
            <div className="name">
              <div className="form-group">
                <label htmlFor="first-name">First name</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  aria-required
                  aria-describedby="first-name-error"
                  autoComplete="off"
                />
                <span id="first-name-error" aria-hidden>
                  {actionData?.errors?.firstName}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last name</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  aria-required
                  aria-describedby="last-name-error"
                  autoComplete="off"
                />
                <span id="last-name-error" aria-hidden>
                  {actionData?.errors?.lastName}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                aria-required
                aria-invalid={!!actionData?.errors?.email}
                aria-describedby="email-error"
                autoComplete="off"
              />
              <span id="email-error" aria-hidden>
                {actionData?.errors?.email}
              </span>
            </div>

            <button type="submit" className="button button--primary">
              Save
            </button>
          </Card>
        </Form>
      </section>
    </main>
  );
};

export default Index;
