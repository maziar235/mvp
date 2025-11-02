import React from "react";
import { useRouter } from "next/router";
import "../styles/variables.css";
import "./AppHeader.css";

type AppHeaderProps = {
  userName?: string;
  notificationsCount?: number;
  showSearch?: boolean;
  onLogout?: () => void;
};

export const AppHeader: React.FC<AppHeaderProps> = ({
  userName = "User",
  notificationsCount = 0,
  showSearch = true,
  onLogout,
}) => {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleNewChallenge = () => {
    router.push("/challenges/new");
  };

  const handleNotifications = () => {
    router.push("/notifications");
  };

  return (
    <header className="m4v-header" role="banner" aria-label="Meals4V header">
      <div className="m4v-header__inner">
        {/* Logo */}
        <a className="m4v-logo" href="/dashboard" aria-label="Meals4V home">
          <div className="m4v-logo__icon" aria-hidden="true">M4V</div>
          <div className="m4v-logo__title">Meals4V</div>
        </a>

        {/* Search Bar */}
        {showSearch && (
          <form className="m4v-search" onSubmit={handleSearchSubmit}>
            <span className="m4v-search__icon" aria-hidden="true">🔍</span>
            <input
              type="search"
              placeholder="Search meals, recipes, challenges..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        )}

        {/* Actions */}
        <div className="m4v-actions">
          <div className="m4v-user">
            <span className="m4v-user__greeting">Hello,</span>
            <span className="m4v-user__name">{userName}</span>
          </div>

          <button
            className="m4v-btn m4v-btn--notifications"
            onClick={handleNotifications}
            aria-label={`Notifications${notificationsCount > 0 ? `, ${notificationsCount} unread` : ''}`}
          >
            <span aria-hidden="true">🔔</span>
            {notificationsCount > 0 && (
              <span className="m4v-badge">{notificationsCount > 99 ? '99+' : notificationsCount}</span>
            )}
          </button>

          <button
            className="m4v-btn m4v-btn--primary"
            onClick={handleNewChallenge}
          >
            + New Challenge
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
