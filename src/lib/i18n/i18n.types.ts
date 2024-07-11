import { resources } from "./i18n";

export type FlattenTranslations<T, Prefix extends string = ""> = {
  [K in Extract<keyof T, string>]: `${Prefix}${K}`;
};

type ValidationTranslations =
  (typeof resources)["pl"]["translation"]["validation"];

type ValidationTranslationKeys = FlattenTranslations<
  ValidationTranslations,
  "validation."
>;

export type ValidationErrorMessage =
  ValidationTranslationKeys[keyof ValidationTranslationKeys];

type SupabaseTranslations = (typeof resources)["pl"]["translation"]["supabase"];

type SupabaseTranslationsKeys = FlattenTranslations<
  SupabaseTranslations,
  "supabase."
>;

export type SupabaseErrorMessage =
  SupabaseTranslationsKeys[keyof SupabaseTranslationsKeys];
