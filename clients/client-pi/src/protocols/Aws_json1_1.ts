// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CreatePerformanceAnalysisReportCommandInput,
  CreatePerformanceAnalysisReportCommandOutput,
} from "../commands/CreatePerformanceAnalysisReportCommand";
import {
  DeletePerformanceAnalysisReportCommandInput,
  DeletePerformanceAnalysisReportCommandOutput,
} from "../commands/DeletePerformanceAnalysisReportCommand";
import {
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
} from "../commands/DescribeDimensionKeysCommand";
import {
  GetDimensionKeyDetailsCommandInput,
  GetDimensionKeyDetailsCommandOutput,
} from "../commands/GetDimensionKeyDetailsCommand";
import {
  GetPerformanceAnalysisReportCommandInput,
  GetPerformanceAnalysisReportCommandOutput,
} from "../commands/GetPerformanceAnalysisReportCommand";
import {
  GetResourceMetadataCommandInput,
  GetResourceMetadataCommandOutput,
} from "../commands/GetResourceMetadataCommand";
import { GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput } from "../commands/GetResourceMetricsCommand";
import {
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput,
} from "../commands/ListAvailableResourceDimensionsCommand";
import {
  ListAvailableResourceMetricsCommandInput,
  ListAvailableResourceMetricsCommandOutput,
} from "../commands/ListAvailableResourceMetricsCommand";
import {
  ListPerformanceAnalysisReportsCommandInput,
  ListPerformanceAnalysisReportsCommandOutput,
} from "../commands/ListPerformanceAnalysisReportsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AnalysisReport,
  AnalysisReportSummary,
  CreatePerformanceAnalysisReportRequest,
  Data,
  DataPoint,
  DeletePerformanceAnalysisReportRequest,
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysResponse,
  DimensionGroup,
  DimensionKeyDescription,
  GetDimensionKeyDetailsRequest,
  GetPerformanceAnalysisReportRequest,
  GetPerformanceAnalysisReportResponse,
  GetResourceMetadataRequest,
  GetResourceMetricsRequest,
  GetResourceMetricsResponse,
  Insight,
  InternalServiceError,
  InvalidArgumentException,
  ListAvailableResourceDimensionsRequest,
  ListAvailableResourceMetricsRequest,
  ListPerformanceAnalysisReportsRequest,
  ListPerformanceAnalysisReportsResponse,
  ListTagsForResourceRequest,
  MetricKeyDataPoints,
  MetricQuery,
  NotAuthorizedException,
  PerformanceInsightsMetric,
  Tag,
  TagResourceRequest,
  UntagResourceRequest,
} from "../models/models_0";
import { PIServiceException as __BaseException } from "../models/PIServiceException";

/**
 * serializeAws_json1_1CreatePerformanceAnalysisReportCommand
 */
export const se_CreatePerformanceAnalysisReportCommand = async (
  input: CreatePerformanceAnalysisReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePerformanceAnalysisReport");
  let body: any;
  body = JSON.stringify(se_CreatePerformanceAnalysisReportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePerformanceAnalysisReportCommand
 */
export const se_DeletePerformanceAnalysisReportCommand = async (
  input: DeletePerformanceAnalysisReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePerformanceAnalysisReport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDimensionKeysCommand
 */
export const se_DescribeDimensionKeysCommand = async (
  input: DescribeDimensionKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDimensionKeys");
  let body: any;
  body = JSON.stringify(se_DescribeDimensionKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDimensionKeyDetailsCommand
 */
export const se_GetDimensionKeyDetailsCommand = async (
  input: GetDimensionKeyDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDimensionKeyDetails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPerformanceAnalysisReportCommand
 */
export const se_GetPerformanceAnalysisReportCommand = async (
  input: GetPerformanceAnalysisReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPerformanceAnalysisReport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceMetadataCommand
 */
export const se_GetResourceMetadataCommand = async (
  input: GetResourceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceMetricsCommand
 */
export const se_GetResourceMetricsCommand = async (
  input: GetResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceMetrics");
  let body: any;
  body = JSON.stringify(se_GetResourceMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableResourceDimensionsCommand
 */
export const se_ListAvailableResourceDimensionsCommand = async (
  input: ListAvailableResourceDimensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAvailableResourceDimensions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableResourceMetricsCommand
 */
export const se_ListAvailableResourceMetricsCommand = async (
  input: ListAvailableResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAvailableResourceMetrics");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPerformanceAnalysisReportsCommand
 */
export const se_ListPerformanceAnalysisReportsCommand = async (
  input: ListPerformanceAnalysisReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPerformanceAnalysisReports");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreatePerformanceAnalysisReportCommand
 */
export const de_CreatePerformanceAnalysisReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePerformanceAnalysisReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePerformanceAnalysisReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreatePerformanceAnalysisReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePerformanceAnalysisReportCommandError
 */
const de_CreatePerformanceAnalysisReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePerformanceAnalysisReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePerformanceAnalysisReportCommand
 */
export const de_DeletePerformanceAnalysisReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePerformanceAnalysisReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePerformanceAnalysisReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePerformanceAnalysisReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePerformanceAnalysisReportCommandError
 */
const de_DeletePerformanceAnalysisReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePerformanceAnalysisReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDimensionKeysCommand
 */
export const de_DescribeDimensionKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDimensionKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDimensionKeysResponse(data, context);
  const response: DescribeDimensionKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDimensionKeysCommandError
 */
const de_DescribeDimensionKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDimensionKeyDetailsCommand
 */
export const de_GetDimensionKeyDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionKeyDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDimensionKeyDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDimensionKeyDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDimensionKeyDetailsCommandError
 */
const de_GetDimensionKeyDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionKeyDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPerformanceAnalysisReportCommand
 */
export const de_GetPerformanceAnalysisReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPerformanceAnalysisReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPerformanceAnalysisReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPerformanceAnalysisReportResponse(data, context);
  const response: GetPerformanceAnalysisReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPerformanceAnalysisReportCommandError
 */
const de_GetPerformanceAnalysisReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPerformanceAnalysisReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourceMetadataCommand
 */
export const de_GetResourceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourceMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourceMetadataCommandError
 */
const de_GetResourceMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetResourceMetricsCommand
 */
export const de_GetResourceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceMetricsResponse(data, context);
  const response: GetResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourceMetricsCommandError
 */
const de_GetResourceMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAvailableResourceDimensionsCommand
 */
export const de_ListAvailableResourceDimensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceDimensionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableResourceDimensionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAvailableResourceDimensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAvailableResourceDimensionsCommandError
 */
const de_ListAvailableResourceDimensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceDimensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAvailableResourceMetricsCommand
 */
export const de_ListAvailableResourceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableResourceMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAvailableResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAvailableResourceMetricsCommandError
 */
const de_ListAvailableResourceMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPerformanceAnalysisReportsCommand
 */
export const de_ListPerformanceAnalysisReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPerformanceAnalysisReportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPerformanceAnalysisReportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPerformanceAnalysisReportsResponse(data, context);
  const response: ListPerformanceAnalysisReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPerformanceAnalysisReportsCommandError
 */
const de_ListPerformanceAnalysisReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPerformanceAnalysisReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AdditionalMetricsList omitted.

/**
 * serializeAws_json1_1CreatePerformanceAnalysisReportRequest
 */
const se_CreatePerformanceAnalysisReportRequest = (
  input: CreatePerformanceAnalysisReportRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    Identifier: [],
    ServiceType: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
    Tags: _json,
  });
};

// se_DeletePerformanceAnalysisReportRequest omitted.

/**
 * serializeAws_json1_1DescribeDimensionKeysRequest
 */
const se_DescribeDimensionKeysRequest = (input: DescribeDimensionKeysRequest, context: __SerdeContext): any => {
  return take(input, {
    AdditionalMetrics: _json,
    EndTime: (_) => Math.round(_.getTime() / 1000),
    Filter: _json,
    GroupBy: _json,
    Identifier: [],
    MaxResults: [],
    Metric: [],
    NextToken: [],
    PartitionBy: _json,
    PeriodInSeconds: [],
    ServiceType: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DimensionGroup omitted.

// se_DimensionsMetricList omitted.

// se_GetDimensionKeyDetailsRequest omitted.

// se_GetPerformanceAnalysisReportRequest omitted.

// se_GetResourceMetadataRequest omitted.

/**
 * serializeAws_json1_1GetResourceMetricsRequest
 */
const se_GetResourceMetricsRequest = (input: GetResourceMetricsRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    Identifier: [],
    MaxResults: [],
    MetricQueries: _json,
    NextToken: [],
    PeriodAlignment: [],
    PeriodInSeconds: [],
    ServiceType: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListAvailableResourceDimensionsRequest omitted.

// se_ListAvailableResourceMetricsRequest omitted.

// se_ListPerformanceAnalysisReportsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MetricQuery omitted.

// se_MetricQueryFilterMap omitted.

// se_MetricQueryList omitted.

// se_MetricTypeList omitted.

// se_RequestedDimensionList omitted.

// se_RequestStringList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

/**
 * deserializeAws_json1_1AdditionalMetricsMap
 */
const de_AdditionalMetricsMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __limitedParseDouble(value) as any;
    return acc;
  }, {} as Record<string, number>);
};

/**
 * deserializeAws_json1_1AnalysisReport
 */
const de_AnalysisReport = (output: any, context: __SerdeContext): AnalysisReport => {
  return take(output, {
    AnalysisReportId: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Identifier: __expectString,
    Insights: (_: any) => de_InsightList(_, context),
    ServiceType: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AnalysisReportSummary
 */
const de_AnalysisReportSummary = (output: any, context: __SerdeContext): AnalysisReportSummary => {
  return take(output, {
    AnalysisReportId: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AnalysisReportSummaryList
 */
const de_AnalysisReportSummaryList = (output: any, context: __SerdeContext): AnalysisReportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalysisReportSummary(entry, context);
    });
  return retVal;
};

// de_CreatePerformanceAnalysisReportResponse omitted.

/**
 * deserializeAws_json1_1Data
 */
const de_Data = (output: any, context: __SerdeContext): Data => {
  return take(output, {
    PerformanceInsightsMetric: (_: any) => de_PerformanceInsightsMetric(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DataList
 */
const de_DataList = (output: any, context: __SerdeContext): Data[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Data(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataPoint
 */
const de_DataPoint = (output: any, context: __SerdeContext): DataPoint => {
  return take(output, {
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1DataPointsList
 */
const de_DataPointsList = (output: any, context: __SerdeContext): DataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataPoint(entry, context);
    });
  return retVal;
};

// de_DeletePerformanceAnalysisReportResponse omitted.

/**
 * deserializeAws_json1_1DescribeDimensionKeysResponse
 */
const de_DescribeDimensionKeysResponse = (output: any, context: __SerdeContext): DescribeDimensionKeysResponse => {
  return take(output, {
    AlignedEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AlignedStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Keys: (_: any) => de_DimensionKeyDescriptionList(_, context),
    NextToken: __expectString,
    PartitionKeys: _json,
  }) as any;
};

// de_DescriptiveMap omitted.

// de_DimensionDetail omitted.

// de_DimensionDetailList omitted.

// de_DimensionGroupDetail omitted.

// de_DimensionGroupDetailList omitted.

/**
 * deserializeAws_json1_1DimensionKeyDescription
 */
const de_DimensionKeyDescription = (output: any, context: __SerdeContext): DimensionKeyDescription => {
  return take(output, {
    AdditionalMetrics: (_: any) => de_AdditionalMetricsMap(_, context),
    Dimensions: _json,
    Partitions: (_: any) => de_MetricValuesList(_, context),
    Total: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1DimensionKeyDescriptionList
 */
const de_DimensionKeyDescriptionList = (output: any, context: __SerdeContext): DimensionKeyDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DimensionKeyDescription(entry, context);
    });
  return retVal;
};

// de_DimensionKeyDetail omitted.

// de_DimensionKeyDetailList omitted.

// de_DimensionMap omitted.

// de_FeatureMetadata omitted.

// de_FeatureMetadataMap omitted.

// de_GetDimensionKeyDetailsResponse omitted.

/**
 * deserializeAws_json1_1GetPerformanceAnalysisReportResponse
 */
const de_GetPerformanceAnalysisReportResponse = (
  output: any,
  context: __SerdeContext
): GetPerformanceAnalysisReportResponse => {
  return take(output, {
    AnalysisReport: (_: any) => de_AnalysisReport(_, context),
  }) as any;
};

// de_GetResourceMetadataResponse omitted.

/**
 * deserializeAws_json1_1GetResourceMetricsResponse
 */
const de_GetResourceMetricsResponse = (output: any, context: __SerdeContext): GetResourceMetricsResponse => {
  return take(output, {
    AlignedEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AlignedStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Identifier: __expectString,
    MetricList: (_: any) => de_MetricKeyDataPointsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Insight
 */
const de_Insight = (output: any, context: __SerdeContext): Insight => {
  return take(output, {
    BaselineData: (_: any) => de_DataList(_, context),
    Context: __expectString,
    Description: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InsightData: (_: any) => de_DataList(_, context),
    InsightId: __expectString,
    InsightType: __expectString,
    Recommendations: _json,
    Severity: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SupportingInsights: (_: any) => de_InsightList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InsightList
 */
const de_InsightList = (output: any, context: __SerdeContext): Insight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Insight(entry, context);
    });
  return retVal;
};

// de_InternalServiceError omitted.

// de_InvalidArgumentException omitted.

// de_ListAvailableResourceDimensionsResponse omitted.

// de_ListAvailableResourceMetricsResponse omitted.

/**
 * deserializeAws_json1_1ListPerformanceAnalysisReportsResponse
 */
const de_ListPerformanceAnalysisReportsResponse = (
  output: any,
  context: __SerdeContext
): ListPerformanceAnalysisReportsResponse => {
  return take(output, {
    AnalysisReports: (_: any) => de_AnalysisReportSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_MetricDimensionGroups omitted.

// de_MetricDimensionsList omitted.

/**
 * deserializeAws_json1_1MetricKeyDataPoints
 */
const de_MetricKeyDataPoints = (output: any, context: __SerdeContext): MetricKeyDataPoints => {
  return take(output, {
    DataPoints: (_: any) => de_DataPointsList(_, context),
    Key: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricKeyDataPointsList
 */
const de_MetricKeyDataPointsList = (output: any, context: __SerdeContext): MetricKeyDataPoints[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricKeyDataPoints(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricValuesList
 */
const de_MetricValuesList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_NotAuthorizedException omitted.

/**
 * deserializeAws_json1_1PerformanceInsightsMetric
 */
const de_PerformanceInsightsMetric = (output: any, context: __SerdeContext): PerformanceInsightsMetric => {
  return take(output, {
    Dimensions: _json,
    DisplayName: __expectString,
    Metric: __expectString,
    Value: __limitedParseDouble,
  }) as any;
};

// de_Recommendation omitted.

// de_RecommendationList omitted.

// de_ResponsePartitionKey omitted.

// de_ResponsePartitionKeyList omitted.

// de_ResponseResourceMetric omitted.

// de_ResponseResourceMetricKey omitted.

// de_ResponseResourceMetricList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_UntagResourceResponse omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `PerformanceInsightsv20180227.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
