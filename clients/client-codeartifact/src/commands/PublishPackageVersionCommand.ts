// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  PublishPackageVersionRequest,
  PublishPackageVersionRequestFilterSensitiveLog,
  PublishPackageVersionResult,
  PublishPackageVersionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PublishPackageVersionCommand,
  serializeAws_restJson1PublishPackageVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link PublishPackageVersionCommand}.
 */
type PublishPackageVersionCommandInputType = Omit<PublishPackageVersionRequest, "assetContent"> & {
  /**
   * For *`PublishPackageVersionRequest["assetContent"]`*, see {@link PublishPackageVersionRequest.assetContent}.
   */
  assetContent: PublishPackageVersionRequest["assetContent"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PublishPackageVersionRequest` interface. There are more parameters than `assetContent` defined in {@link PublishPackageVersionRequest}
 */
export interface PublishPackageVersionCommandInput extends PublishPackageVersionCommandInputType {}
/**
 * The output of {@link PublishPackageVersionCommand}.
 */
export interface PublishPackageVersionCommandOutput extends PublishPackageVersionResult, __MetadataBearer {}

/**
 * <p>Creates a new package version containing one or more assets (or files).</p>
 *          <p>The <code>unfinished</code> flag can be used to keep the package version in the <code>Unfinished</code> state until all of it’s assets have been uploaded (see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/packages-overview.html#package-version-status.html#package-version-status">Package version status</a> in the <i>CodeArtifact user guide</i>). To set the package version’s status to <code>Published</code>, omit the <code>unfinished</code> flag when uploading the final asset, or set the status using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionStatus</a>. Once a package version’s status is set to <code>Published</code>, it cannot change back to <code>Unfinished</code>.</p>
 *          <note>
 *             <p>Only generic packages can be published using this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PublishPackageVersionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PublishPackageVersionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new PublishPackageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishPackageVersionCommandInput} for command's `input` shape.
 * @see {@link PublishPackageVersionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class PublishPackageVersionCommand extends $Command<
  PublishPackageVersionCommandInput,
  PublishPackageVersionCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PublishPackageVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishPackageVersionCommandInput, PublishPackageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PublishPackageVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "PublishPackageVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishPackageVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PublishPackageVersionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishPackageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishPackageVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishPackageVersionCommandOutput> {
    return deserializeAws_restJson1PublishPackageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
