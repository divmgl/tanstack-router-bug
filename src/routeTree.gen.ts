/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsProjectIdIndexImport } from './routes/projects.$projectId/index'
import { Route as ProjectsProjectIdTabRouteImport } from './routes/projects.$projectId/$tab/route'
import { Route as ProjectsProjectIdTabActivitiesActivityIdImport } from './routes/projects.$projectId/$tab/activities/$activityId'

// Create/Update Routes

const ProjectsProjectIdIndexRoute = ProjectsProjectIdIndexImport.update({
  path: '/projects/$projectId/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsProjectIdTabRouteRoute = ProjectsProjectIdTabRouteImport.update({
  path: '/projects/$projectId/$tab',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsProjectIdTabActivitiesActivityIdRoute =
  ProjectsProjectIdTabActivitiesActivityIdImport.update({
    path: '/activities/$activityId',
    getParentRoute: () => ProjectsProjectIdTabRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/projects/$projectId/$tab': {
      preLoaderRoute: typeof ProjectsProjectIdTabRouteImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectId/': {
      preLoaderRoute: typeof ProjectsProjectIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectId/$tab/activities/$activityId': {
      preLoaderRoute: typeof ProjectsProjectIdTabActivitiesActivityIdImport
      parentRoute: typeof ProjectsProjectIdTabRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  ProjectsProjectIdTabRouteRoute.addChildren([
    ProjectsProjectIdTabActivitiesActivityIdRoute,
  ]),
  ProjectsProjectIdIndexRoute,
])

/* prettier-ignore-end */
