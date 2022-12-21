import { defineStore } from 'pinia';
import type { Session } from "@supabase/gotrue-js/src/lib/types";
import type { UserAppMetadata, UserMetadata } from '@supabase/supabase-js';
import { supabase } from '@/db/supabase';
import { getPagination } from '@/helpers/getPagination';


type User = {
  id: string;
  email: string;
  app_metadata: UserAppMetadata,
  aud: string,
  user_metadata: UserMetadata,
  created_at: string;
};

type Url = {
  code: string;
  short_link: string;
  original_link: string;
};

export const userSessionStore = () => defineStore({
  id: 'userStore',
  state: () => ({
    session: {
      access_token: '',
      token_type: '',
      expires_in: 0,
      refresh_token: '',
      user: {} as User
    } as Session | null,
    loading: false,
    urls: [] as Url[] | null
  }),
  actions: {
    async getUrls(page: number) {
      const { from, to } = getPagination(page, 5);
      const { data, error } = await supabase
        .from('urls')
        .select('*')
        .eq('user_Id', this.session?.user.id)
        .range(from, to)
        .order('created_at', { ascending: false });
      this.urls = data;
    }
  }
});
