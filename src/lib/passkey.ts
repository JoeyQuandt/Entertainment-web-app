'use server';

import { tenant } from '@teamhanko/passkeys-next-auth-provider';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';

const passkeyApi = tenant({
  apiKey: process.env.PASSKEYS_API_KEY!,
  tenantId: process.env.NEXT_PUBLIC_PASSKEYS_TENANT_ID!,
});

export async function startServerPasskeyRegistration() {
  // @ts-expect-error this is not generated in the API that is why this commented
  const session = await getServerSession(authOptions);
  const sessionUser = session?.user;

  const user = await prisma.user.findUnique({
    where: { email: sessionUser?.email as string },
    select: { id: true, name: true },
  });

  const createOptions = await passkeyApi.registration.initialize({
    userId: user!.id,
    username: user!.name || '',
  });

  return createOptions;
}

export async function finishServerPasskeyRegistration(credential: unknown) {
  // @ts-expect-error this is not generated in the API that is why this commented
  const session = await getServerSession(authOptions);
  if (!session) throw new Error('Not logged in');
  // @ts-expect-error this is not generated in the API that is why this commented
  await passkeyApi.registration.finalize(credential);
}
