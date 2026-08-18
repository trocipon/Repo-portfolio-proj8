interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}

export function InputField({ id, label, type, value, onChange, error, placeholder }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input id={id} name={id} type={type} value={value} onChange={onChange} className={`rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${error ? "border-red-400" : "border-input"}`} placeholder={placeholder} aria-required="true" aria-invalid={!!error} aria-describedby={error ? `error-${id}` : undefined} />
      {error && (
        <span id={`error-${id}`} className="text-xs text-red-500 mt-1" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

interface TextareaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
}

// Jumeau de InputField pour le seul champ multi-lignes du formulaire : mêmes
// classes de bordure/focus/erreur, textarea au lieu d'input.
export function TextareaField({ id, label, value, onChange, error, placeholder, rows = 5 }: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <textarea id={id} name={id} required rows={rows} value={value} onChange={onChange} className={`resize-none rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${error ? "border-red-400" : "border-input"}`} placeholder={placeholder} aria-required="true" aria-invalid={!!error} aria-describedby={error ? `error-${id}` : undefined} />
      {error && (
        <span id={`error-${id}`} className="text-xs text-red-500 mt-1" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
